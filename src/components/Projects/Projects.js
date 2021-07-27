import React from 'react';
import './Projects.css';
import court from './Images/court.png';
import brew from './Images/brew.png';
import blog from './Images/blog.PNG';

const projectData = [

    {
        title: 'Court Finder',
        repoName: 'court-finder',
        deployedName: 'https://quiet-beyond-45478.herokuapp.com/',
        image: court,
        description: 'This is a web application to network with others looking to join or schedule pick-up basketball games '
    },
    {
        title: 'Fun Times',
        repoName: 'breweries-team4',
        deployedName: 'https://nicholasheld.github.io/breweries-team4/',
        image: brew,
        description: 'This is a web application to find food and breweries paired by zip code '
    },
    {
        title: 'Tech Blog',
        repoName: 'tech-blog',
        deployedName: 'https://peaceful-depths-88586.herokuapp.com/',
        image: blog,
        description: 'This is a tech blog where users can sign up and leave comments'
    },
];

export function Projects() {
    return projectData.map((project, index) => {
        return (
            <div className='card' key={index}>
                <h2>{project.title}</h2>
                <div className='cardContent'> 
                    <div>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <p><a href={project.deployedName}>Deployed App</a></p>
                        <p><a href={`https://github.com/nicholasheld/${project.repoName}`}>GitHub</a></p>
                    </div>
                </div>
            </div>
        )
    })
}