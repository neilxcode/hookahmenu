
// document.addEventListener('DOMContentLoaded', () => {
    $(document).ready( () => {



        $(".likeBlend").on('click', function(){
            $(".list-group").remove();
            $(".list-group").append(`

            <strong><a href="/index/:{{this._id}}"> {{this.names}}</a></strong>
                    {{this.likes + 1}}
                    {{!--<form class="likeButton" type="submit" method="POST">Like</form>--}}

                    <form action="/index/:{{this._id}}" method="POST">
                        <div>
                            <label for="liked">LIKE</label>
                            <input type="checkbox" name="liked" id="likeBlend" value="">
                        </div>
                    </form>

            
            `)

    });

