import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wateringCount: 0,
  plantCount: 0,
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    increaseWateringCount: state => {
      state.wateringCount = state.wateringCount + 1
    },
    setPlantCount: (state, action) => {
      state.plantCount = action.payload
    },
  },
})

export const { increaseWateringCount, setPlantCount } = statisticsSlice.actions
export default statisticsSlice.reducer
