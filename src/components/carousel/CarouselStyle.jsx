import styled from "styled-components"

export const MySlider = styled.div`
  width: 100%;
.flickity-page-dots{
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
    background: transparent;
}

.flickity-page-dots:focus{
   outline: none;
   border: none;
   -webkit-outline: none;
   -webkit-border: none;
}

.flickity-page-dots .dot.is-selected {
    opacity: 1;
    background-color:${({ theme }) => theme.colors.lightColor}
}

.flickity-page-dots .dot {
    display: inline-block;
    width: 11px;
    height: 11px;
    margin: 0 8px;
    background: ${({ theme }) => theme.colors.lightColor};
    border: 1px solid ${({ theme }) => theme.colors.lightColor};
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: .25;
    cursor: pointer;
}
  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus{
   outline: none;
   border: none;
   -webkit-outline: none;
   -webkit-border: none;
}

  .carousel-news .flickity-viewport {
    overflow: visible;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    touch-action: pan-x;
  }
  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    transform: translateX(-51.63%); 
  }
  

   .flickity-slider > * + * {
    margin-left: 1rem;
   }

  .carousel-news .carousel-cell:not(:last-child) {
    margin-right: 30px;
  }

  .carousel-news .carousel-cell {
    width: -webkit-calc(25% - 20px);
    width: -moz-calc(25% - 20px);
    width: calc(25% - 20px);
    position: absolute;
    left: 0px;
    transform: translateX(0%);
  }

  li {
    display: list-item;
    list-style: none;
  }

  .flickity-button:disabled {
    opacity: 0.2;
  }

  .flickity-prev-next-button.previous {
    top: 33.6px;
    position: relative;
    left: 320px;
     z-index: 99;
  }
    .flickity-prev-next-button.next{
      position: absolute;
      right: 0px;
      bottom: -30px;
       right: 320px;
       z-index: 99;
    }

  .flickity-prev-next-button.next,
  .flickity-prev-next-button.previous {
    -webkit-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    -o-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    -moz-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .flickity-prev-next-button.next,
  .flickity-prev-next-button.previous {
    width: 25px;
    height: 25px;
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .flickity-button:disabled {
    opacity: .3;
    cursor: auto;
    pointer-events: none;
}

  .flickity-prev-next-button.previous {
    background-image: url(https://www.realfevr.com/_next/static/media/ico-arrow-white-left.26f64e30.svg;
  }
  .flickity-prev-next-button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transform: translateY(-50%);
  }
.flickity-button {
    border: none;
    color: ${({ theme }) => theme.colors.lightColor}
  }
button {
    .flickity-prev-next-button.next svg, .flickity-prev-next-button.previous svg {
    display: none;
}
.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}
.flickity-button-icon {
  fill: currentColor;
}
svg {
overflow: hidden;
}
}

@media ${({ theme }) => theme.mediaQueries.below768} {
  .flickity-button {
    display:none;
  }

}

@media(max-width: 1090px) {
   .flickity-prev-next-button.next{
      position: absolute;
      right: 0px;
      bottom: -30px;
       right: 290px;
       z-index: 99;
    }
    .flickity-prev-next-button.previous{
    left: 290px;
    }
}

@media(max-width: 971px) {
  .flickity-prev-next-button.previous{
    left: 220px;
    // border: 2px solid red;
    }

  .flickity-prev-next-button.next{
      right: 220px;

       }
}
`
