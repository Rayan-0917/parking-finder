export const MOCK_LOCATIONS = [
  {
    id: '1',
    name: 'Phoenix Marketcity',
    type: 'Mall',
    image: 'https://images.unsplash.com/photo-1708151056663-560af1115ca6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '0.8 km',
    totalSpots: 40,
    availableSpots: 12,
    spots: Array.from({ length: 40 }, (_, i) => ({
      id: `m1-s${i + 1}`,
      label: `${Math.floor(i / 10) + 1}${String.fromCharCode(65 + (i % 10))}`,
      status: Math.random() > 0.4 ? 'occupied' : 'available',
      pricePerHour: 40,
      type: i < 5 ? 'handicap' : i < 10 ? 'ev' : 'standard',
      occupiedBy: Math.random() > 0.4 ? {
          plateNumber: `KA 01 MH ${1000 + Math.floor(Math.random() * 8999)}`,
          startTime: new Date(Date.now() - Math.random() * 10000000).toISOString()
      } : undefined
    }))
  },
  {
    id: '2',
    name: 'Kempegowda Int Airport',
    type: 'Airport',
    image: 'https://images.unsplash.com/photo-1570114581742-586696237de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '12.4 km',
    totalSpots: 60,
    availableSpots: 45,
    spots: Array.from({ length: 60 }, (_, i) => ({
      id: `a1-s${i + 1}`,
      label: `P${Math.floor(i / 20) + 1}-${i % 20 + 1}`,
      status: Math.random() > 0.8 ? 'occupied' : 'available',
      pricePerHour: 100,
      type: 'standard',
    }))
  },
  {
    id: '3',
    name: 'Bangalore City Railway',
    type: 'Train Station',
    image: 'https://images.unsplash.com/photo-1639494095806-1680b909cb33?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '4.2 km',
    totalSpots: 30,
    availableSpots: 5,
    spots: Array.from({ length: 30 }, (_, i) => ({
      id: `t1-s${i + 1}`,
      label: `S-${i + 1}`,
      status: Math.random() > 0.2 ? 'occupied' : 'available',
      pricePerHour: 20,
      type: 'standard',
    }))
  }
];
