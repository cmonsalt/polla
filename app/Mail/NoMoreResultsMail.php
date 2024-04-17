<?php
// En app/Mail/NoMoreResultsMail.php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NoMoreResultsMail extends Mailable
{
    use Queueable, SerializesModels;
    protected $name;
    protected $last_name;
    protected $id;

    public function __construct($name, $last_name, $id)
    {
        $this->name = $name;
        $this->last_name = $last_name;
        $this->id = $id;
    }

    public function build()
    {
        return $this->view('emails.noMoreResults')
            ->with([
                'name' => $this->name,
                'last_name' => $this->last_name,
                'id' => $this->id,
            ]);
    }
}
