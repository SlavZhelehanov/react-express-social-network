import React, { useEffect, useRef } from 'react';
import Picker from '@emoji-mart/react';

export default function EmojiPicker({ emojiPicker, setEmojiPicker, handleEmojiSelect, data }) {
    const pickerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setEmojiPicker(false);
            }
        }

        if (emojiPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [emojiPicker, setEmojiPicker]);

    return (
        <div style={{ position: 'relative' }}>
            <button
                type='button'
                onClick={() => setEmojiPicker(!emojiPicker)}
                className="w3-button w3-theme-l1 small-button w3-round-xxlarge"
            >
                <i className="fa fa-smile-o"></i>
            </button>

            {emojiPicker && (
                <div
                    ref={pickerRef}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 1000,
                    }}
                >
                    <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                </div>
            )}
        </div>
    );
}