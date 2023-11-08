function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w35fss6e9/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }    else {
    console.log(results);


    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Eu posso ouvir -' + results[0].label;
    document.getElementById("result-confidence").innerHTML = 'Precisão -' + results[0].confidence.toFixed(3);
    document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("Gato.webp");
        img1 = document.getElementById("Cachorro.png");
        img2 = document.getElementById("Orelha.png");
        

        if (results[0].label == 'latido') {
          img1.src = 'Cachorro.png'
          img.src = 'Gato.gif'
          img1.src = 'Orelha.gif'

           
        }
        else if (results[0].label == 'Miado') {
          img1.src = 'Cachorro.gif'
          img.src = 'Gato.webp'
          img1.src = 'Orelha.gif'
        }}} 
          
  
