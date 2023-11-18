import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db'
import { OrderGroup } from './OrderGroup'
import { Spare } from './Spare'
import { Vehicle } from './Vehicle'

export interface WorkOrderInstance extends Model {
    addSpare: (spareId: number) => Promise<void>;
    addSpares: (spareIds: number[]) => Promise<void>;
  }
  


export const WorkOrder = sequelize.define('work_order', {
	ot_number: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	date: {
		type: DataTypes.DATE,
		allowNull: true
	},
	observations: {
		type: DataTypes.STRING,
		allowNull: false
	},


})

WorkOrder.belongsTo(Vehicle, { foreignKey: 'license_vehicle' })
// WorkOrder.belongsTo(Spare, { foreignKey: 'spares_ids' })
WorkOrder.hasMany(Spare, { foreignKey: 'workOrderId', as: 'spares_ids' })
WorkOrder.belongsTo(OrderGroup, { foreignKey: 'ot_type' })
/*Tratar de cambiar nombre a minúscula*/
WorkOrder.belongsToMany(Spare, { as:'spares',through: 'workorderspare' })
Spare.belongsToMany(WorkOrder, {as:'orders', through: 'workorderspare' })