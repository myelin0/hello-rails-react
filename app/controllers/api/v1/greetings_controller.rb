class Api::V1::GreetingsController < ApplicationController
  def index
    random_greeting = Message.all.sample
    render json: { status: 'SUCCESS', data: random_greeting.greeting }.to_json
  end
end