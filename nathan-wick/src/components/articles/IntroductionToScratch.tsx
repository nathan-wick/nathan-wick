import HiddenSolution from "../HiddenSolution";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chooseCustomBackdropImage from "../../images/articles/scratch/ChooseCustomBackdrop.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chooseCustomBackdropImage2 from "../../images/articles/scratch/ChooseCustomBackdrop2.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chooseCustomSpriteImage from "../../images/articles/scratch/ChooseCustomSprite.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chooseCustomSpriteImage2 from "../../images/articles/scratch/ChooseCustomSprite2.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import deleteDefaultSpriteImage from "../../images/articles/scratch/DeleteDefaultSprite.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gravityImage from "../../images/articles/scratch/Gravity.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jumpImage from "../../images/articles/scratch/Jump.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import moveLeftImage from "../../images/articles/scratch/MoveLeft.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import moveRightImage from "../../images/articles/scratch/MoveRight.webp";

const IntroductionToScratch = <>
    <div
        className="text-medium">
        What Is Scratch?
    </div>
    <div
        className="text-small text-indent">
        Scratch is a free programming language and online community where you can create your own interactive stories, games, and animations. It is a visual programming language, which means that you can create programs by dragging and dropping blocks of code together. This makes it a great way to learn the basics of programming, and it can also be used to create some really impressive projects.
    </div>
    <div
        className="text-small text-indent">
        To learn the basics of Scratch, we will create a simple 2D platform game. You can start a Scratch project by clicking the button below.
    </div>
    <div
        className="align-horizontal-center">
        <button
            onClick={() => window.open(
                `https://scratch.mit.edu/projects/editor`,
                `_blank`,
            )}>
            Open Scratch
        </button>
    </div>
    <div
        className="text-medium">
        Choose A Sprite
    </div>
    <div
        className="text-small text-indent">
        A sprite is a 2D image that can be moved around on a screen. It can be used to represent a character, an object, or anything else you want. For this step, we will be choosing a sprite to represent our game's main character.
    </div>
    <div
        className="text-small">
        <ol>
            <li>
                <b>Delete Default Sprite</b>: In the bottom right of your project, you will see window with a cat sprite named Sprite1. Click the trash can icon on the cat sprite to remove the cat sprite from our game.
                <img
                    className="width-100 rounded"
                    src={deleteDefaultSpriteImage}
                    alt={`Delete Default Sprite`} />
            </li>
            <li>
                <b>Choose Custom Sprite</b>: In the bottom right of your project, you will see a button with a cat and plus icon. Click the button and select your favorite sprite. This will be the game's main character.
                <img
                    className="width-100 rounded"
                    src={chooseCustomSpriteImage}
                    alt={`Choose Custom Sprite`} />
                <img
                    className="width-100 rounded"
                    src={chooseCustomSpriteImage2}
                    alt={`Choose Custom Sprite 2`} />
            </li>
        </ol>
    </div>
    <div
        className="text-medium">
        Choose A Backdrop
    </div>
    <div
        className="text-small text-indent">
        A backdrop is the background image that appears behind your sprites in Scratch. It's like a giant poster that you can put behind your characters to set the scene.
    </div>
    <div
        className="text-small">
        <ol>
            <li>
                <b>Choose Custom Backdrop</b>: In the bottom right of your project, you will see a button with an image and plus icon. Click the button and select your favorite backdrop.
                <img
                    className="width-100 rounded"
                    src={chooseCustomBackdropImage}
                    alt={`Choose Custom Backdrop`} />
                <img
                    className="width-100 rounded"
                    src={chooseCustomBackdropImage2}
                    alt={`Choose Custom Backdrop 2`} />
            </li>
        </ol>
    </div>
    <div
        className="text-medium">
        Program Player Movement
    </div>
    <div
        className="text-small text-indent">
        Player movement is how you control your character in a video game. It's how you get them to move around the world, whether it's walking, running, jumping, or flying.
    </div>
    <div
        className="text-small text-indent">
        To program player movement, we will use code blocks. Code blocks are the basic building blocks of Scratch programs. They are used to control the behavior of sprites.
    </div>
    <div
        className="text-small">
        <div
            className="text-bold">
            Right
        </div>
        <ol>
            <li>Select the main character sprite and notice the code blocks in the left-most window.</li>
            <li>Navigate to the <b>Events</b> code block category.</li>
            <li>Drag and drop the <b>when space key pressed</b> code block into the center window and change <b>space</b> to <b>right arrow</b>.</li>
            <li>Navigate to the <b>Motion</b> code block category.</li>
            <li>Drag and drop the <b>point in direction 90</b> code block into the center window and connect it to the bottom of our previous code block.</li>
            <li>
                Drag and drop the <b>move 10 steps</b> code block into the center window and connect it to the bottom of our previous code block.
                <img
                    className="width-100 rounded"
                    src={moveRightImage}
                    alt={`Move Right`} />
            </li>
        </ol>
    </div>
    <div
        className="text-small">
        <div
            className="text-bold">
            Left
        </div>
        <ol>
            <li>Right click the <b>move right</b> code block chain that we just created and select <b>duplicate</b>.</li>
            <li>Select the new chain's <b>when right arrow key pressed</b> code block and change <b>right arrow</b> to <b>left arrow</b>.</li>
            <li>
                Select the new chain's <b>point in direction 90</b> code block and change <b>90</b> to <b>-90</b>.
                <img
                    className="width-100 rounded"
                    src={moveLeftImage}
                    alt={`Move Left`} />
            </li>
        </ol>
    </div>
    <div
        className="text-small">
        <div
            className="text-bold">
            Gravity
        </div>
        <ol>
            <li>Similarly to how we choose our main character sprite, add a sprite to your project for your main character to walk on.</li>
            <li>Drag your main character above the new sprite.</li>
            <li>
                Recreate the new code block chain shown below. The new code block chain should cause the main character fall unless it is touching the new sprite.
                <img
                    className="width-100 rounded"
                    src={gravityImage}
                    alt={`Move Left`} />
            </li>
        </ol>
    </div>
    <div
        className="text-small text-bold">
        Jump
    </div>
    <div
        className="text-small text-indent">
        Use what you've learned today to cause the main character to jump when the up arrow key is pressed. Once you are done, click the button below for a solution.
    </div>
    <HiddenSolution
        solution={<img
            className="width-100 rounded"
            src={jumpImage}
            alt={`Move Left`} />} />
    <div
        className="text-medium">
        Next Steps
    </div>
    <div
        className="text-small text-indent">
        Congratulations! You now know the basics of programming with Scratch. Now, use your creativity to add new features, characters, objects, etc. to your game. If you would like to view more tutorials and ideas, click the button below.
    </div>
    <div
        className="align-horizontal-center">
        <button
            onClick={() => window.open(
                `https://scratch.mit.edu/ideas`,
                `_blank`,
            )}>
            Learn More
        </button>
    </div>
</>;

export default IntroductionToScratch;
