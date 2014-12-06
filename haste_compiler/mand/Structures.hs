module Structures where
import Base

data Structure = Structure {
    name :: String,
    domid :: ID,
    descr :: String,
    cost :: Cost,
    effects :: Effects,
    unlocked :: Unlocked,
    unlocks :: Unlocks
} deriving (Show)

type VirtueMultiplier = Double
type MoneyMultiplier = Double
type VirtueAddend = Double
type MoneyAddend = Double

data Effects = Effects {
    multiplier :: (VirtueMultiplier, MoneyMultiplier),
    addend :: (VirtueAddend, MoneyAddend)
} deriving (Show)
