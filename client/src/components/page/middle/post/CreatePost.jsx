import data from '@emoji-mart/data';
import { useState } from 'react';
import EmojiPicker from '../../../globals/loadingTemplateImage/emojiPicker/EmojiPicker';

export default function CreatePost() {
    const [emojiPicker, setEmojiPicker] = useState(false);
    const [postContent, setPostContent] = useState("");

    function handleEmojiSelect(emoji) {
        setPostContent(prev => prev += emoji.native);
    }

    function handleTextArea(e) {
        setPostContent(prev => prev = e.target.value);
    }

    return (
        <form className="w3-container w3-padding">
            <h6 className="w3-opacity">Share what is your mind 😊</h6>
            {/* <p contentEditable="true" className="w3-border w3-padding">
                Status: Feeling Blue
            </p> */}
            <textarea
                type="text"
                name="postContent"
                id="postContent"
                value={postContent}
                onChange={handleTextArea}
                placeholder="Status: Feeling Blue"
                className="wide-input"
            ></textarea>
            <div className="button-container">
                <div className="left-buttons">
                    <button type="button" className="w3-button w3-theme-l1 small-button w3-round-xlarge">
                        <i className="fa fa-paperclip" /> &nbsp;Attachments
                    </button>
                    <button type="button" className="w3-button w3-theme-l1 small-button w3-round-xlarge">
                        <i className="fa fa-image" /> &nbsp;Add Media
                    </button>
                    <EmojiPicker
                        emojiPicker={emojiPicker}
                        setEmojiPicker={setEmojiPicker}
                        handleEmojiSelect={handleEmojiSelect}
                        data={data}
                    />
                </div>
                <button type="button" className="w3-button w3-theme w3-round-large">
                    <i className="fa fa-pencil" /> &nbsp;Post
                </button>
            </div>
        </form>
    );
}