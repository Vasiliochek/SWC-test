export interface Car {
  id: number
  user_id: number
  company_id: number
  angles_count: number
  vin: string
  vin_postfix: null
  vehicle_name: string
  brand: null
  model: null
  body_type: null
  fuel_type: null
  hp: null
  ccm: null
  description: null
  moderated: true
  defect_state: string
  placeholder: string
  preview: string
  photo: {
    id: number
    car_id: number
    angle_id: number
    url: string
    processed_url: string
    status: number
    status_name: string
    defect_state: string
    in_process_by_admin: number
    created_at: number
  }
  photos_count: number
  uploads: number
  created_at: number
}
