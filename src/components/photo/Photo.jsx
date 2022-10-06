import React from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

import { photo, photoAnimation } from "./photo.module.css";

const Photo = ({ src, rotateDirection }) => {
  const position = useSpring({ x: 0, y: 0 });
  const bindPosition = useDrag((params) => {
    position.x.set(params.offset[0]);
    position.y.set(params.offset[1]);
  });

  function getRandomDegree(direction) {
    const right = Math.floor(Math.random() * 45);
    const left = -Math.floor(Math.random() * 45);
    switch (direction) {
      case "left":
        return left;
      case "right":
        return right;
      default:
        return Math.random() > 0.5 ? right : left;
    }
  }

  const styles = {
    x: position.x,
    y: position.y,
    backgroundImage: `url("${src}")`,
    transform: `rotate(${getRandomDegree(rotateDirection)}deg)`,
  };

  const { ref, inView: isVisible } = useInView();

  return (
    <animated.div
      ref={ref}
      dragabble="true"
      {...bindPosition()}
      style={styles}
      className={isVisible ? `${photo} ${photoAnimation}` : photo}
    ></animated.div>
  );
};

export default Photo;
