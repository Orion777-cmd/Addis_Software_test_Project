import React, { useEffect, useState } from "react";

import styled from "@emotion/styled"
// import { Link } from "react-router-dom"
import Tag from "../tag/tag.component"
import Card from "../card/card.component"
import ListCard from "../listCard/listCard.component"
// import imageUrl from "../../assets/thinkingOutLoud.png";
import RoseUrl from "../../assets/roses.jpg";
import BluesUrl from "../../assets/blues.jpg";
import BassGuitarUrl from "../../assets/bassGuitar.jpg";
import ConcertUrl from "../../assets/concert.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import {useSelector, useDispatch} from "react-redux"

import { selectMusicHidden } from "../../redux/music/music.selector"
import { toggleMusic } from "../../redux/music/music.reducer"
import { selectMusicData } from "../../redux/music/music.selector";

import { getMusicAction } from "../../redux/music/music.reducer";

const RightSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    width: 45%;
    height: 100%;
    border-radius: 10px;

`;


const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.5em;
        h2 {
            margin: 0;
            padding: 0;
        }

    }
    a {
        text-decoration: none;
        color: ${({ mode }) => (mode === "dark" ? "#fff" : "#333")};
        font-size: 12px;
        transition: all 0.2s ease-in-out;
        &:hover {
            text-decoration: underline;
        }

    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.2em;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

const FilterSongContainer = styled.div`
    width: 100%;
    display: flex;
    overflow-x: hidden; /* Hide overflowing content */
    align-items: center;
    gap: 0.1em;
    justify-content: center; 
    position: relative;

`;

const SliderButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
    width: 5%; /* Adjust button width */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
    &:hover {
        color: #333;
    }
`;

const LeftButton = styled(SliderButton)`
    left: 0px;
    top : 10px;
`;

const RightButton = styled(SliderButton)`
    right: 5px;
    top : 10px;
`;

const CardContainer = styled.div`
    display: flex;
    gap: 0.1em;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`;


const AllSongContainer = styled.div`
    width: 100%;
    height: 30%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    gap: 0.5em;
    
    h3 {
        margin: 0;
        padding: 0;
    }
    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 8px;

      }
      
      ::-webkit-scrollbar-track {
        background: #f5f5f5;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #000;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #333;
      }

`;


const RightSidebar = () => {
    const {mode} = useSelector(state => state.theme)
    const id = "65bd5254792dbc024bf9255d";
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMusicAction(id));
    }, []);


    const {data, isLoading, error} = useSelector(selectMusicData);

    
    return (
        <RightSideBarContainer>
            <TitleContainer mode={mode}>
                <div>
                    <h2>Music</h2>
                    <h2>Categories</h2>
                </div>

                <a href="#">View All</a>
            </TitleContainer>

            <FilterContainer>
            <Tag Genre="Jazz"/>
                <Tag Genre="classical"/>
                <Tag Genre="Blues"/>
                <Tag Genre="Soul"/>
                <Tag Genre="Rock"/>
                <Tag Genre="Pop"/>                
                <Tag Genre="Rap"/>
                <Tag Genre="Hip Hop"/>
                <Tag Genre="R&B"/>
                <Tag Genre="Country"/>
                <Tag Genre="Reggae"/>                
                            
            </FilterContainer>
            <FilterSongContainer>
                <LeftButton><FaArrowLeft color={mode == "dark"? "#fff":"000"}/></LeftButton>
                <CardContainer>
                    <Card imageUrl={RoseUrl} />
                    <Card imageUrl={BluesUrl} />
                    <Card imageUrl={BassGuitarUrl} />
                </CardContainer>
                <RightButton><FaArrowRight color={mode == "dark"? "#fff":"000"}/></RightButton>
            </FilterSongContainer>

            <AllSongContainer>
                <h3>Available Songs (<span>3</span>)</h3>
                { [...Array(5)].map((_, i) => <ListCard key={i} idx={i} data={data} isLoading={isLoading}/>)}
                
            </AllSongContainer>
        </RightSideBarContainer>
    )
}

export default RightSidebar;