const $generatedContent = $(".generatedContent");

const $button = $("#generateContentBtn");

$button.click(function () {
  let $arguments = $(".form-check-input");
  let $typeNumber = $("#typeNumber").val();
  let $textLength = $("#length").val();
  let url = "https://loripsum.net/api/";

  if ($typeNumber.length !== 0) {
    url = url.concat(`/${$typeNumber}`);
  }

  url = url.concat(`/${$textLength}`);

  for ($checkmark of $arguments) {
    if ($checkmark.checked === true) {
      console.log($checkmark.checked);
      url = url.concat(`/${$checkmark.id}`);
    }
  }

  $.get(url, function (data) {
    $generatedContent.empty();
    $generatedContent.prepend(data);
  });
});

let $copy = $("#copy");
$copy.click(function () {
  navigator.clipboard.writeText($generatedContent.html());
});
