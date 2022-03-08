import React from 'react'
import { Backspace, KeyboardCapslock } from '@material-ui/icons';

import '../assets/styles/components/Keyboard.scss'

export default function Keyboard() {
  return (
    <div className="keyboard__container">
      <div className="keyboard__row">
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>1</h4>
            <small>.,!</small>
          </div>
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>2</h4>
            <small>abc</small>
          </div>
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>3</h4>
            <small>def</small>
          </div>
        </div>
      
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>4</h4>
            <small>ghi</small>
          </div>
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>5</h4>
            <small>jkl</small>
          </div>
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>6</h4>
            <small>mno</small>
          </div>
        </div>
      
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>7</h4>
            <small>pqrs</small>
          </div>
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>8</h4>
            <small>tuv</small>
          </div>
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>9</h4>
            <small>wxyz</small>
          </div>
        </div>

        <div className="keyboard__col keyboard__col--icon">
          <KeyboardCapslock />
        </div>
        <div className="keyboard__col">
          <div className="keyboard__key">
            <h4>0</h4>
            <small>#@&</small>
          </div>
        </div>
        <div className="keyboard__col keyboard__col--icon">
          <Backspace />
        </div>
      </div>
    </div>
  )
}
