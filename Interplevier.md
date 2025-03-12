# Tutoriel pour l'utilisation de l'interrupteur à levier
## Step 1
Ce tutoriel te permettra de compléter la programmation afin d'utiliser un interrupteur à levier
Pour commencer, garde les deux blocs bleus.
## Step 2
Ajouter le bloc ``||pins: régler le levier en broche P0 sur haut||`` dans le bloc ``||basic: au démarrage||``
```blocks
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
  
})


```
## Step 3
Ajoute le bloc ``||logic: si alors sinon ||`` au bloc  ``||basic: toujours ||``


```blocks


lepins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
   if (true) {
      
   } else {
      
   }
})
```
## Step 4
Ajoute le bloc ``||logic: 0=0 ||`` dans l'espace "vrai" du bloc ``||logic: si alors sinon ||``
```blocks
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
   if (0 == 0) {
      
   } else {
      
   }
})


```
## Step 5
Ajoute le bloc``||pins: lire la broche numérique P0||`` dans le premier espace du bloc ``||logic: si alors sinon||``


```blocks
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
   if (pins.digitalReadPin(DigitalPin.P0) == 0) {
      
   } else {
      
   }
})


```
## Step 6
Ajoute le bloc ``||basic: montrer nombre||``sous le bloc ``||logic: si alors ||``
 et choisis le nomnre que tu veux afficher.






```blocks
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
   if (pins.digitalReadPin(DigitalPin.P0) == 0) {
       basic.showNumber(0)
   } else {
      
   }
})




```
## Step 7
Ajoute le bloc ``||basic: montrer icône||``sous le bloc``||logic: sinon ||``
et choisis l'icône que tu veux afficher.




```blocks
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
   if (pins.digitalReadPin(DigitalPin.P0) == 0) {
       basic.showNumber(0)
   } else {
       basic.showIcon(IconNames.Heart)
   }
})
```


## Step 8
Félicitaions!! Tu as terminé la programmation de ce défi.


Réalise le branchement, télécharge le programme dans le micro:bit et tu seras prêt pour faire des tests.
```blocks
/Capture d'écran, le 2022-10-05 à 13.05.56.png
})
```
