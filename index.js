const $generatedContent = $(".generatedContent");

const $button = $("#generateContentBtn");

$button.click(function () {
  let $arguments = $(".form-check-input"); //html to generate
  let $typeNumber = $("#typeNumber").val(); //number of paragraphs
  let $textLength = $("#length").val(); //length of paragraphs
  let url = "https://loripsum.net/api/"; //api url

  if ($typeNumber.length !== 0) {
    url = url.concat(`/${$typeNumber}`);
  } //append number of paragraphs to get request

  url = url.concat(`/${$textLength}`); //apppend length of paragraphs

  //loop over options and append to get request
  for ($checkmark of $arguments) {
    if ($checkmark.checked === true) {
      console.log($checkmark.checked);
      url = url.concat(`/${$checkmark.id}`);
    }
  }

  //make get request to the constructed URL
  $.get(url, function (data) {
    $generatedContent.empty(); //destroy old data
    $generatedContent.prepend(data); //prepend new data to html
  });
});

let $copy = $("#copy");
$copy.click(function () {
  navigator.clipboard.writeText($generatedContent.html()); //copy html in $generatedContent to clipboard.
});
