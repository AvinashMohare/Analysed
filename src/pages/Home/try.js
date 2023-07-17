import React, { useState } from "react";
import styles from "./try.module.scss";

const cardData = [
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
    {
        image: "https://img.freepik.com/free-photo/full-shot-man-doing-crunches_23-2148801887.jpg?w=2000",
        title: "Wall angels",
        description:
            "Wall angels are a great way to warm up your shoulders and upper back before a workout, or to help relieve tension and tightness in those areas after a long day at work.",
    },
];

const CardComponent = () => {
    const [isGrid, setIsGrid] = useState(false);

    const toggleView = () => {
        setIsGrid(!isGrid);
    };

    return (
        <div className={styles.rootExercises}>
            <div className={styles.container}>
                <button onClick={toggleView} className={styles.toggleButton}>
                    {isGrid ? "List View" : "Grid View"}
                </button>
                <div
                    className={
                        isGrid ? styles.gridContainer : styles.listContainer
                    }
                >
                    {cardData.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={card.image} alt={card.title} />
                            </div>

                            <div className={styles.textContainer}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
