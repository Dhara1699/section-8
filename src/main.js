import { createApp } from 'vue';

import First from './App.vue';
import FriendContact from './components/FriendContact';
import NewFriend from './components/NewFriend.vue';

 const app = createApp(First);

 app.component ('friend-contact', FriendContact);
 app.component ('new-friend', NewFriend);

 app.mount('#app');
