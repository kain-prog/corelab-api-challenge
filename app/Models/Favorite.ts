import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Vehicle from './Vehicle';

export default class Favorite extends BaseModel {
  @column({ isPrimary: true })
	public id: number;

  @column()
  public car_id: number;

  @column()
  public user_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Vehicle)
  public vehicle: BelongsTo<typeof Vehicle>;

}