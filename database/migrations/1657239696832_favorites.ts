import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'favorites';

	public async up () {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');
			table.integer('car_id')
				.unsigned()
				.references('id')
				.inTable('vehicles')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('user_id').unsigned();

			/**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
			table.timestamp('created_at', { useTz: true });
			table.timestamp('updated_at', { useTz: true });
		});
	}

	public async down () {
		this.schema.dropTable(this.tableName);
	}
}
