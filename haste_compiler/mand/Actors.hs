module Actors where
import Base

data Actor = Actor {
    name :: String,
    domid :: ID,
    descr :: String,
    cost :: Cost,
    population :: Double,
    production :: Production,
    unlocked :: Unlocked,
    unlocks :: Unlocks
} deriving (Show)

addToPopulation :: Actor -> Double -> Actor
addToPopulation actor n = actor { population = current + n} where
    current = population actor

parish :: Actor
parish = Actor {
    name = "信徒",
    domid = "parish",
    descr = "在俗の信徒．お賽銭を出すなどしますが，自分で徳を生むことはありません．",
    cost = Cost 0 0,
    population = 0,
    production = Production 0 2,
    unlocked = True,
    unlocks = Unlocks 50 ["street", "mountain"] []
}

street :: Actor
street = Actor {
    name = "虚無僧",
    domid = "street",
    descr = "虚無僧．街で修行し，徳とともにいくらかお金を得ます．",
    cost = Cost 100 0,
    population = 0,
    production = Production 2 1,
    unlocked = False,
    unlocks = UnlocksNone
}

mountain :: Actor
mountain = Actor {
    name = "山伏",
    domid = "mountain",
    descr =  "山伏．山で修行し，より多い徳を積みます．",
    cost = Cost 100 0,
    population = 0,
    production = Production 3 0,
    unlocked = False,
    unlocks = UnlocksNone
}

priest :: Actor
priest = Actor {
    name = "僧侶",
    domid = "priest",
    descr =  "お寺に居る僧侶．めっちゃ偉い．",
    cost = Cost 1000 200,
    population = 0,
    production = Production 20 0,
    unlocked = False,
    unlocks = UnlocksNone
}
