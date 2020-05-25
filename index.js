let rate;
let opnion = "";

$("button").click(function () {
  var $this = $(this);
  var $prevAll = $(this).prevAll();

  $("button").removeClass("detractor-hover passive-hover promoter-hover");

  var className = $this.attr("class") + "-hover";

  rate = $this.context.innerText;

  $this.addClass(className);
  $prevAll.addClass(className);
});

$("textarea").change(function () {
  console.log(this);
});

jQuery("#send-nps").click(function () {
  opnion = jQuery("textarea#textarea").val();

  console.log(rate, opnion);
});
