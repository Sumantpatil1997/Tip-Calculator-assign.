function calculate(){
    var bill_amount =  document.getElementById('bill-amount').value;
    var percentage = document.getElementById('percentage').value;
    var person = document.getElementById('person').value;
    var tip_amount = bill_amount * (percentage / 100);
    var each = (tip_amount/person).toFixed(2);
    document.getElementById('tip-amount').innerHTML = each;
 document.getElementById('display').style = "block"
}