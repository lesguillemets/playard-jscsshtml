module Base where

type Virtue = Double
type Money = Double
type Unlocked = Bool
type ID = String

data Cost = Cost Virtue Money deriving (Show, Eq)
data Production = Production Virtue Money deriving (Show, Eq)
data Unlocks = UnlockNone | Unlocks Int [Actor] [Structure] deriving (Show)

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

data Structure = Structure {
    name :: String,
    domid :: ID,
    descr :: String,
    cost :: Cost,
    effect :: Effect,
    unlocked :: Unlocked,
    unlocks :: Unlocks
} deriving (Show)

deta Effect = Effect deriving (Show)
