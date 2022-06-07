class Api::MoviesController < ApplicationController
    before_action :set_movie, only: [:show, :update, :destroy]

    def index
        render json: Movie.all
    end

    def show
        render json: @movie
    end

    def create 
        movie = Movie.new(movie_params)
        if(movie.save)
            render json: movie
        end
    end

    def update
        if @movie.update(movie_params)
            render json: @movie
        else 
            render json: {errors: @movie.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @movie.destroy
    end

    private
    def set_movie
        @movie = Movie.find(params[:id])
    end
    def movie_params
        return params.require(:movie).permit(:name, :year)
    end
end
