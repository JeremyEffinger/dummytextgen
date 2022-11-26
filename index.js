const $generatedContent = $(".generatedContent");

let $arguments = $(".form-check-input");

console.log($arguments);
const $button = $("#generateContentBtn");

$button.click(function () {
  url = "https://loripsum.net/api/";
  for ($checkmark of $arguments) {
    if ($checkmark.checked === true) {
      console.log($checkmark.checked);
      url = url.concat(`/${$checkmark.id}`);
    }
  }
  console.log(url);
  $.get(url, function (data) {
    $generatedContent.empty();
    $generatedContent.prepend(data);
  });
});
