var values = {
    num1: 0,
    num2: 0,
    operator: "",
    isNum1Set: false,
  };
  
  $("button").click(function(e) {
    let buttonValue = e.target.dataset.number || e.target.dataset.operator;
  
    if (!isNaN(buttonValue)) {
      if (!values.isNum1Set) {
        values.num1 = values.num1 * 10 + +buttonValue;
        $("#calc-screen").val(values.num1);
      } else {
        values.num2 = values.num2 * 10 + +buttonValue;
        $("#calc-screen").val(values.num2);
      }
    } else if (buttonValue === "=") {
      switch (values.operator) {
        case "+":
          values.num2 = values.num1 + values.num2;
          break;
        case "-":
          values.num2 = values.num1 - values.num2;
          break;
        case "*":
          values.num2 = values.num1 * values.num2;
          break;
        case "/":
          values.num2 = values.num1 / values.num2;
          break;
      }
      $("#calc-screen").val(values.num2);
      values.num1 = 0;
      values.isNum1Set = false;
    } else {
      values.operator = buttonValue;
      values.isNum1Set = true;
    }
  });
  