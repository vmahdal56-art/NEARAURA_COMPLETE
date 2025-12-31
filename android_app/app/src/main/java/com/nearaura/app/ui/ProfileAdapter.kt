package com.nearaura.app.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.nearaura.app.R
import com.nearaura.app.data.User
import com.nearaura.app.databinding.ItemProfileBinding

class ProfileAdapter(private var users: List<User>) : RecyclerView.Adapter<ProfileAdapter.ProfileViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ProfileViewHolder {
        val binding = ItemProfileBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ProfileViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ProfileViewHolder, position: Int) {
        holder.bind(users[position])
    }

    override fun getItemCount(): Int = users.size

    fun updateUsers(newUsers: List<User>) {
        users = newUsers
        notifyDataSetChanged()
    }

    inner class ProfileViewHolder(private val binding: ItemProfileBinding) : RecyclerView.ViewHolder(binding.root) {
        fun bind(user: User) {
            binding.textViewName.text = user.name
            binding.rainbowAuraView.setMegaBoosted(user.isMegaBoosted)

            if (user.profilePhotoUrls.isNotEmpty()) {
                Glide.with(itemView.context)
                    .load(user.profilePhotoUrls["0"])
                    .into(binding.imageViewProfile)
            }

            addFruitOverlays(user.auraFlavors)
        }

        private fun addFruitOverlays(auraFlavors: List<String>) {
            binding.fruitOverlayContainer.removeAllViews()
            for (flavor in auraFlavors) {
                val fruitIcon = ImageView(itemView.context)
                val resourceId = when (flavor) {
                    "pineapple" -> R.drawable.ic_pineapple
                    "banana" -> R.drawable.ic_banana
                    "peach" -> R.drawable.ic_peach
                    else -> 0
                }

                if (resourceId != 0) {
                    fruitIcon.setImageResource(resourceId)
                    binding.fruitOverlayContainer.addView(fruitIcon)
                }
            }
        }
    }
}