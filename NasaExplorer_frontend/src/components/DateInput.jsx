import React from 'react'

export default function DateInput({ value, onChange, min = '1995-06-16', max }) {
  return (
    <input
      type="date"
      className="input"
      value={value}
      min={min}
      max={max}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
