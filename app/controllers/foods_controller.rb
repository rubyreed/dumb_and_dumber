class FoodsController < ApplicationController
  before_action :set_actor
  before_action :set_foods, only: [:show, :update, :destroy, :edit]

  def index
    render component: "Foods", props: { actor: @actor, foods: @actor.foods }
  end

  def show
    render component: "Food", props: { food: @food }
  end

  def new
    render component: "NewFood", props: { food: @food }
  end

  def create
    @food = @actor.foods.new(food_params)
    if (@food.save)
      redirect_to [@actor, @food]
    else
      #TODO ERROR HANDLING
    end
  end

  def edit
    render component: "EditFood", props: { actor: @actor, food: @food }
  end

  def update
    if (@food.update(food_params))
      redirect_to [@actor, @food]
    else
      #TODO ERROR HANDLING
    end
  end

  def destroy
    @food.destroy
    redirect_to actor_foods_path(@actor)
  end

  private

  def food_params
    params.require(:food).permit(:dish)
  end

  def set_actor
    @actor = Actor.find(params[:actor_id])
  end

  def set_food
    # this way is better, because it is only going to search
    # the given actors foods
    @food = @actor.foods.find(params[:id])
    # also do it this way
    # @food = Food.find(params[:id])
  end
end
