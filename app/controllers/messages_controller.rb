class MessagesController < ApplicationController
  def show
    @message = Message.new
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      ActionCable.server.broadcast 'message_channel', text: @message
      redirect_to root_path
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
