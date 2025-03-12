# Tutoriel pour l'utilisation du potentiomètre et le son
## Step 1
Ce tutoriel te permettra de compléter la programmation afin d'utiliser un potentiomètre.
Pour commencer, garde les deux blocs bleus.
## Step 2
Ajouter le bloc ``||music: régler le volume||`` dans le bloc ``||basic: au démarrage||`` et ajuste la valeur à 100.
```blocks
music.setVolume(100)
basic.forever(function () {
  
})


```
## Step 3
Ajoute le bloc ``||math: 0 x 0 ||`` au bloc  ``||variable: définir Hz à ||`` et un autre bloc...




```blocks


let Hz = 0


music.setVolume(100)


basic.forever(function () {


   Hz = 0 * (0 / 0)


})
```
## Step 4
Créer une autre variable. Celle-ci nomme-la kHz (Kilo Hertz). Ajoute le bloc ``||variable:définir kHz|``  au bloc ``||basic: toujours|`` à la suite du bloc ``||variable:définir Hz|``


```blocks
let kHz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
   Hz = 0
   kHz = 0
})
```
## Step 5
Ajoute le bloc``||math: 0 x 0 ||`` au bloc  le bloc ``||variable:définir Hz|``
Ajouter un deuxième bloc ``||math: 0 / 0 ||``  dans le deuxième espace.
```blocks
let kHz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
   Hz = 0 * (0 / 0)
   kHz = 0
})


```
## Step 6
Ajoute le bloc ``||pins: lire la broche analogique p0|`` dans le premier espace du bloc ``||variable:définir Hz|``
Change la valeur à la suite du signe de multiplication pour la valeur de 5000.
Change la valeur à la suite du signe de division pour la valeur 1023.




```blocks
let kHz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
   Hz = pins.analogReadPin(AnalogPin.P0) * (5000 / 1023)
   kHz = 0
})


```
## Step 7
Ajoute le bloc ``||math: 0 / 0 ||`` dans le bloc ``||variable:définir kHz|``
Ajoute le bloc ``||variable: Hz|`` dans le premier espace du bloc.
Change la valeur ``0`` à la suite du signe de division par la valeur ``1000``




```blocks
let kHz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
   Hz = pins.analogReadPin(AnalogPin.P0) * (5000 / 1023)
   kHz = Hz / 1000
})
```


## Step 8
Ajoute le bloc ``||basic: montrer nombre||``
Ajoute le bloc ``||variable: Khz|`` dans le bloc  ``||basic: montrer nombre||``


```blocks
let kHz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
   Hz = pins.analogReadPin(AnalogPin.P0) * (5000 / 1023)
   kHz = Hz / 1000
   basic.showNumber(Khz)
})
})
```
## Step 9
Ajoute le bloc ``||music: lire son en arrière plan||`` à la suite de du bloc ``||basic: montrer nombre||``
Appuie sur le ``+`` pour avoir accès au au menu.
Ajouter le bloc ``||variable: Hz|`` dans fréquence départ et fréquence fin.
Change la valeur de la durée à ``3000``


```blocks
let kHz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
   Hz = pins.analogReadPin(AnalogPin.P0) * (5000 / 1023)
   kHz = Hz / 1000
   basic.showNumber(Khz)
   music.playSoundEffect(music.createSoundEffect(
   WaveShape.Sine,
   Hz,
   Hz,
   255,
   0,
   3000,
   SoundExpressionEffect.None,
   InterpolationCurve.Linear
   ), SoundExpressionPlayMode.InBackground)
})
```
## Step 10
Félicitaions!! Tu as terminé la programmation


Réalise le branchement, télécharge le programme dans le micro:bit et tu seras prêt pour faire des tests.
```blocks
/Capture d'écran, le 2022-10-05 à 13.05.56.png
})
```

