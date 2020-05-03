// alert(window.innerWidth);
if(navigator.getBattery()){

    let powerLevel = document.querySelectorAll('.powerState');
    let chargerState = document.querySelectorAll('.chargerState');

    navigator.getBattery().then(res =>{
        return res;
    }).then(dat =>{
        //Verify Charging status
        let isCharging = dat.charging;

        // get Charging level
        let chargeLevel = dat.level * 100;
        
        // View charging status
        isCharging ? powerLevel.forEach(a =>{a.textContent = `Device is charging`}) : powerLevel.forEach(a =>{a.textContent = `Device is not charging`});

        // View battery Level
        chargeLevel == 100 ? chargerState.forEach(a =>{a.textContent = `Your device is fully charged` }) : chargerState.forEach(a =>{a.textContent = `Your device is currently ${chargeLevel}`;})


        


    })
}
else{
    alert("Sorry your browser does not support battery manager");
}