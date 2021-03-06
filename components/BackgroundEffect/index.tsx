import React, { memo, useMemo } from "react";
import { BackgroundContainer, Star } from "./style";
import useStarParalaxEffect from "./useStarParalaxEffect";
import starPositions from "./starPositions.json";

interface BackgroundEffectProps {
    isMenuOpen:boolean;
}

function BackgroundEffect({isMenuOpen}: BackgroundEffectProps) {
    const container = useStarParalaxEffect();
    
    const stars = useMemo(() => starPositions.map((position, index) => (
        <Star
            style={position}
            key={String(index)}
        />
    )), []);

    return (
        <BackgroundContainer isMenuOpen={isMenuOpen} ref={container}>
            {stars}
        </BackgroundContainer>
    );
}

export default memo(BackgroundEffect);
