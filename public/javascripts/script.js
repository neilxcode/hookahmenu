
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
        });



//       console.log('IronGenerator JS imported successfully!');
//   }, false);

  // $(document).ready(function(){

      // axios({
      //   method: "GET",
      //   url: `http://localhost:3000/hookahmenu`
      //   }).then(responseFromApi => {
      //     console.log(responseFromApi.data);
      //     responseFromApi.data.forEach({});
      //     $('.panel-body').empty();
      //     $('.panel-body').append(`
      //       <li> ${topBlends.names} </li>
      //       `)
      //       })
      //       .catch(err => {
      //       console.log(err);
      // })
      //   })


///////test
//sort descending
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});


//     $(document).ready( () => {
//         // console.log("button clicked");
//     axios({
//       method: "GET",
//       url: `http://localhost:3000/hookahmenu`
//     }).then(responseFromApi => {
//     console.log(responseFromApi.data);
//     topBlends = responseFromApi.data.blends
//     sortedBlends = topBlends.likes.sort(function(a, b){return a - b}).forEach([]);
//     $('.panel-body').empty();
//     $('.panel-body').append(`
//     <li> ${topBlends.names} </li>
//     `)
//     })
//     .catch(err => {
//     console.log(err);
// })
//     })


/////////testing


