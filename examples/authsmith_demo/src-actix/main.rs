#[actix_web::main]
async fn main()->color_eyre::Result<()>{
	authsmith_demo_lib::run().await
}
