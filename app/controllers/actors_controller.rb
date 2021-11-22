class ActorsController < ApplicationController
  before_action :set_actor, only: [:show, :edit, :update, :destroy]

  def index
    render component: "Actors", props: { actors: Actor.all }
  end

  def show
    render component: "Foods", props: { actor: @actor, foods: @actor.foods }
  end

  def new
    render component: "NewActor"
  end

  def create
     # sub = Sub.new(params.require(:sub).permit(:name))
    # create sub in memory
    actor = Actor.new(actor_params)
    # try to save it to DB (will validation)
    if (actor.save)
      redirect_to actors_path
    else
      #TODO: render our new form with actor(to show errors)
    end
  end

  def edit
    render component: "EditActor", props: { actor: @actor }
  end

  def update
      #TODO Update actor
      if (@actor.update(actor_params))
        redirect_to actors_path
      else
        #TODO: render our edit form with actor(to show errors)
      end
  end

  def destroy
    @actor.destroy
    redirect_to actors_path
  end

private

  def actor_params
    params.require(:actor).permit(:character, :quote)
  end

  def set_actor
    @actor = Actor.find(params[:id])
  end
end