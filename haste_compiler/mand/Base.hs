module Base where

type Virtue = Double
type Money = Double
type Unlocked = Bool
type ID = String
type ActorName = String
type StructureName = String

data Cost = Cost Virtue Money deriving (Show, Eq)
data Production = Production Virtue Money deriving (Show, Eq)
data Unlocks = UnlocksNone | Unlocks Int [ActorName] [StructureName] deriving (Show)
