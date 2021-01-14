$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const instrumentInput = $("input#instrument").val();
    const dateInput = $("input#date").val();
    const timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".instrument").text(instrumentInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});