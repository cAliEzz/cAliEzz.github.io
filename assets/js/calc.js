(function () {
 
  const errors = $('#form-error');
  function errorMessage(msg) {
    errors.html(msg);
    $('#results_div').hide();
    errors.show();
    return false;
  }

  $('#calc-form')?.trigger("reset");

  const calcBtn = document.getElementById('calcBtn');
  calcBtn.addEventListener('click', e => {
    const gender = $('input[name="genderRadio"]:checked').val();
    // const exIntinsity = $('input[name="ExIntinsity"]:checked').val();
    const exTarget = $('input[name="ExTarget"]:checked').val();
    const exTimes = $('input[name="exTimes"]:checked').val();
    // const thyroidGlandProblem = $('#problemsWithGland').is(':checked');
    const age = $('#AGEINPUT').val();
    const weight = $('#WEIGHTInput').val();
    const height = $('#HEIGHTInput').val();
    

    
    if(
      !gender
      // || !exTarget
      || !exTimes
      || age == undefined
      || weight == undefined
      || height == undefined
      ){
        
        errorMessage('Some values are wrong, try again please!!')
        return;
      }
    let result = 0;
    let activeAverage = 0;
    let AllCals = 0;

    if(gender === 'MALE'){
      result = (weight * 10) + (height * 6.26) - (age * 5) + 5;
    }else{
      result = (weight * 10) + (height * 6.26) - (age * 5) - 161;
    }

    switch (exTimes) {
      case '0T':
        activeAverage = 1.2;
        break;
      case '13T':
        activeAverage = 1.375;
        break;
      case '35T':
        activeAverage = 1.550;
        break;
      case '57T':
        activeAverage = 1.725;
        break;
      case '67T':
        activeAverage = 1.9;
        break;

      default:
        break;
    }
    
    AllCals = result * activeAverage;
   
    
    let MildWeight = AllCals - 250;
    let LossWeight = AllCals - 500;
      let ExtremeWeight = AllCals - 1000;
      $('#allCalRes').text('≈ ' + Math.ceil(AllCals) + ' cal/day');
      $('#LossWeight').html('Weight loss ≈ <span class="text-warning">' + Math.ceil( LossWeight) + '</span> <small>cal/day</small>');
      $('#MildWeight').html('Mild weight loss ≈ <span class="text-warning">' + Math.ceil(MildWeight) + '</span> <small>cal/day</small>');
      $('#ExtremeWeight').html('Extreme weight loss ≈ <span class="text-warning"> ' + Math.ceil(ExtremeWeight) + '</span> <small>cal/day</small>');
   


  });

  


})();