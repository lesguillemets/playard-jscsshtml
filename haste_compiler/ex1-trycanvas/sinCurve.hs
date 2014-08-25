import qualified Haste
import qualified Haste.Graphics.Canvas as Cnv

main = do
    Just canv <- Cnv.getCanvasById "canv"
    animSin canv 0

animSin :: Cnv.Canvas -> Double -> IO()
animSin canv deg = do
    Cnv.render canv $ Cnv.stroke $ sinCurve deg
    Haste.setTimeout 10 $ animSin canv (deg + 0.1)

sinCurve deg = mapM_ (\(p0,p1) -> Cnv.line p0 p1) $ sinPoints deg
sinPoints :: Double -> [((Double,Double),(Double,Double))]
sinPoints deg = take 500 $ zip dots (tail dots)
    where
        deg' = deg -- pid * fromIntegral (floor (deg/pid))
        dots = [(20*x, 200*sin x +250) | x <- [deg', deg'+0.02 ..]]
