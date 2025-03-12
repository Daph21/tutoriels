Tuto Sonde - Github


# Tutoriel pour l'utilisation de la sonde de température DS18B20



## Step 1



Supprime le bloc ``||basic: au démarrage||``



## Step 2



Crée une variable ``||variable: temperature||`` et ajoute le bloc ``||variable: définir temperature à ||`` dans la boucle ``||basic: toujours||``



```blocks


let temperature = 0


basic.forever(function () {


    temperature = 0


})


```



## Step 3



Dans l'extension DS Temp, sélectionne ``||dstemp:temperature (C) on P0||`` et le placer dans le bloc  ``||variable: définir temperature à ...||``


Le schéma de branchement du capteur de température va apparaître dans le simulateur.



```package


dstemp=github:bsiever/microbit-dstemp


```


```blocks


let temperature = 0


basic.forever(function () {


    temperature = dstemp.celsius(DigitalPin.P0)


})


```



## Step 4



En utilisant les blocs logique, ajoute ``||logic: si||`` ``||variable: temperature||``  ``||logic: > -300 alors ||``



```blocks


let temperature = 0


basic.forever(function () {


    temperature = dstemp.celsius(DigitalPin.P0)


    if (temperature > -300) {


       


    }


})


```



## Step 5



Avec le bloc de Communication Série ``||serial: série écrire valeur ||`` inscrire "T" = ``||variable: temperature||`` dans le si



```blocks


let temperature = 0


basic.forever(function () {


    temperature = dstemp.celsius(DigitalPin.P0)


    if (temperature > -300) {


        serial.writeValue("T", temperature)


    }


})


```



## Step 6



Ajoute une pause de 1 s = ``||basic: pause (ms) 1000||`` après le si



```blocks


let temperature = 0


basic.forever(function () {


    temperature = dstemp.celsius(DigitalPin.P0)


    if (temperature > -300) {


        serial.writeValue("T", temperature)


    }


    basic.pause(1000)


})


```


## Step 7



Réalise le branchement, télécharge le programme dans le micro:bit et tu seras prêt pour faire des tests.

