import { keyframes } from "@emotion/react";
import css from "styled-jsx/css";


export const slideAndDisappearForever = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0; /* Start invisible */
  }
  40% {
    transform: translateX(50px);
    opacity: 1; /* Fade in */
  }
  45% {
    transform: translateX(0);
    opacity: 1; /* Stay visible */
  }
  55% {
    transform: translateX(0);
    opacity: 1; /* Stay visible */
  }
  60% {
    transform: translateX(50px);
    opacity: 1; /* Slide again */
  }
  100% {
    transform: translateX(0);
    opacity: 0; /* Fade out */
  }
`;

export const slideAndDisappear = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  25% {
    transform: translateX(50px);
    opacity: 1;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  75% {
    transform: translateX(50px);
    opacity: 1;
  }
  90% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0;
    visibility: hidden;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInUpAnimation = css`
  animation: ${fadeInUp} 2s ease;
`;