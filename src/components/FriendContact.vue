<template>
    <li>
        <h2>{{ name }} {{ isFavorite  ? '(Favorite)' : ' '  }}</h2>
        <button v-on:click="toggleFavorite">Toggle Favorite</button>
        <button v-on:click="toggleDetails">{{ detailsAreVisiable ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisiable">
            <li><strong>Phone :</strong>{{ phoneNumber }}</li>
            <li><strong>Email :</strong>{{ emailAddress }}</li>
        </ul>
        <button v-on:click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
   /* props : [
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite'
    ], */

    props : {
        id : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        phoneNumber : {
            type : String,
            required : true
        },
        emailAddress : {
            type : String,
            required : true
        },
        isFavorite : {
            type : Boolean,
            required : false,
            default : false,
          //  validator : function (value) {
          //      return value === '1' || value === '0';
         // }
        }
    },
     emits : ['toggle-favorite'],
  /*  emits: {
        'toggle-favorite' : function(id) {
            if(id) {
                return true;
            } else {
                console.warn('Id is missing!');
                return false;
            }
        }
    }, */
    data() {
        return {
        detailsAreVisiable : false,
       // friendIsFavorite : this.isFavorite,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisiable = !this.detailsAreVisiable;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite' , this.id);
        }
    }
}
</script>