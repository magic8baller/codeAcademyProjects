const visibleLightWaves = () => {
 let lightWaves = 'Moonlight'; 
 let region = 'The Arctic';
 if (region === 'The Arctic') {
   let lightWaves = 'Northern Lights';
   console.log(lightWaves);
 }
 console.log(lightWaves);
}

visibleLightWaves();


/*output: 
Northern Lights
Moonlight

(Notice the ouput. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.)
