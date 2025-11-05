// CreateMediTrack.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateMediTrack = () => {
  const [form, setForm] = useState({
    medicineName: '',
    dosage: '',
    frequency: '',
    timings: '',
    startDate: '',
    endDate: '',
    purpose: '',
    isActive: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.medicineName) newErrors.medicineName = 'Medicine name is required';
    if (!form.dosage) newErrors.dosage = 'Dosage is required';
    if (!form.frequency) newErrors.frequency = 'Frequency is required';
    if (!form.startDate) newErrors.startDate = 'Start date is required';
    if (!form.endDate) newErrors.endDate = 'End date is required';
    if (!form.purpose) newErrors.purpose = 'Purpose is required';
    if (!form.timings) newErrors.timings = 'At least one timing is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('/api/meditracks', form);
      alert('Medicine track added successfully');
    } catch (err) {
      alert('Error adding medicine track');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Medicine Track</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Medicine Name:</label>
          <input name="medicineName" value={form.medicineName} onChange={handleChange} />
          {errors.medicineName && <p>{errors.medicineName}</p>}
        </div>

        <div>
          <label>Dosage:</label>
          <input name="dosage" value={form.dosage} onChange={handleChange} />
          {errors.dosage && <p>{errors.dosage}</p>}
        </div>

        <div>
          <label>Frequency:</label>
          <input name="frequency" value={form.frequency} onChange={handleChange} />
          {errors.frequency && <p>{errors.frequency}</p>}
        </div>

        <div>
          <label>Timings:</label>
          <input name="timings" value={form.timings} onChange={handleChange} />
          {errors.timings && <p>{errors.timings}</p>}
        </div>

        <div>
          <label>Start Date:</label>
          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />
          {errors.startDate && <p>{errors.startDate}</p>}
        </div>

        <div>
          <label>End Date:</label>
          <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />
          {errors.endDate && <p>{errors.endDate}</p>}
        </div>

        <div>
          <label>Purpose:</label>
          <input name="purpose" value={form.purpose} onChange={handleChange} />
          {errors.purpose && <p>{errors.purpose}</p>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
            />
            Active
          </label>
        </div>

        <button type="submit">Add Track</button>
      </form>
    </div>
  );
};

export default CreateMediTrack;
