import React from 'react'
import { useState } from 'react'

function CheckBox() {
    const [status,setStatus] = useState(false)

    const handleChange= (e) => {
        let isChecked = e.target.checked;
        setStatus(isChecked)
      }
}

export default CheckBox