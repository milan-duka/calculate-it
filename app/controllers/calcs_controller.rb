class CalcsController < ApplicationController
  
  def bmi_init
    @article = Article.find(1)
    @rendered = false
  end
  def bmi_perform
    @article = Article.find(1)
    if params[:reset_fields]
      params[:first] = params[:second] = ""
      @result = nil
      @rendered = true
      render partial: 'bmi_calc'
    else
      @result = ((params[:second]).to_f / ((params[:first]).to_f / 100) ** 2).round(2)
      puts @result
      @rendered = true
      render partial: 'bmi_calc'
    end
  end
end