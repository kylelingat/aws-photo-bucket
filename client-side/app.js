const buildHtmlElements = response => {
  const empty = $('.empty')
  response.map((item) => {
    empty.append(`<div class="images">
      <img src="https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${item.Key}">
    </div>`)
  })
 }



const test = () => {
  $.ajax({
    url: 'https://eiegmmtlu1.execute-api.us-west-2.amazonaws.com/dev/users/photos',
    type: 'GET',
    success: (data) => {
      console.log('Request Good');
      console.log(data.message, "data")
      buildHtmlElements(data.message.Contents);
    },
    error: () => console.log('Error')
  })
}