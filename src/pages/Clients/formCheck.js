import classes from "./FormCheck.module.scss";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
    "https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6111621/pexels-photo-6111621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const FormCheck = ({ onBackClick }) => {
    const musclesArray = ["Hands", "Legs", "Hip Flexors"];

    const imageLink =
        "https://images.pexels.com/photos/6453414/pexels-photo-6453414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <div className={classes.exerciseDetailsContainer}>
            <div className={classes.header}>
                <div className={classes.exerciseTitle}>
                    <p>Form Check</p>
                </div>

                <div className={classes.buttons} onClick={onBackClick}>
                    <div className={classes.button}>
                        <p>Back</p>
                    </div>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.top}>
                    <div className={classes.left}>
                        <div className={classes.thumbnailContainer}>
                            <img
                                className={classes.thumbnailImage}
                                src={imageLink}
                                alt="Exercise Thumbnail"
                            />
                        </div>
                    </div>

                    <div className={classes.right}>
                        <div className={classes.calendar}>
                            <DayPicker />
                        </div>

                        <div className={classes.details}>
                            <div className={classes.musclesInvolvedContainer}>
                                <div className={classes.musclesInvolvedTitle}>
                                    <p>Muscles Involved</p>
                                </div>
                                <div className={classes.musclesList}>
                                    {musclesArray.map((muscles, index) => (
                                        <div
                                            key={index}
                                            className={classes.musclesInvolved}
                                        >
                                            <p>{muscles}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={classes.accuracyContainer}>
                                <div className={classes.accuracyTitle}>
                                    <p>Accuracy</p>
                                </div>
                                <div className={classes.accuracyList}>
                                    <div className={classes.accuracy}>
                                        <p>60 %</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.bottom}>
                    <div className={classes.box}>
                        <Carousel useKeyboardArrows={true}>
                            {images.map((URL, index) => (
                                <div className="slide">
                                    <img
                                        alt="exercises"
                                        src={URL}
                                        key={index}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCheck;
